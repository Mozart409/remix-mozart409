{
  description = "Development environment for a Node.js project";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";
    unstable.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    wrangler-flake.url = "github:ryand56/wrangler";
  };

  outputs = {
    self,
    nixpkgs,
    unstable,
    flake-utils,
    wrangler-flake,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = true;
      };
      unstablePkgs = import unstable {inherit system;};
    in {
      # to use other shells, run:
      # nix develop . --command fish
      devShells.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs_24
          nodePackages.pnpm
          lazydocker
          ni
          nix-ld
          autoPatchelfHook
          # wrangler
          wrangler-flake.packages.${system}.wrangler
          bun
          docker
          docker-compose
          lazydocker
          python3
          caddy
        ];

        shellHook = ''
          export LD_LIBRARY_PATH=${pkgs.nix-ld}/lib:$LD_LIBRARY_PATH
          export NIX_LD=${pkgs.glibc}/lib/ld-linux-x86-64.so.2
          ./patch-workerd.sh
          echo "node: $(node -v)"
          echo "bun: $(bun -v)"
          echo "To install dependencies, run: ni or pnpm install"

          # Add user to docker group if not already added
          if ! groups $USER | grep -q docker; then
            echo "Note: You may need to add your user to the docker group:"
            echo "sudo usermod -aG docker $USER"
            echo "Then log out and back in, or run: newgrp docker"
          fi
        '';
      };

      packages.default = pkgs.writeShellScriptBin "setup-project" ''
        pnpm install
      '';
    });
}
