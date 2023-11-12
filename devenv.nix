{ pkgs, ... }:

{
  dotenv.enable = false;
  dotenv.disableHint = true;

  packages = [
    pkgs.git
    pkgs.nodejs
    pkgs.bun
  ];

  scripts.hello.exec = "echo hello from $GREET";

  certificates = [
    "og.localhost"
  ];

  services.caddy = {
    enable = true;
    virtualHosts."og.localhost".extraConfig = ''
      reverse_proxy :5100
    '';
  };

  languages = {
    javascript.enable = true;
  };

  processes = {
    next.exec = "npm run dev";
  };
}
