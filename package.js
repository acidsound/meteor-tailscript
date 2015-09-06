Package.describe({
  name: 'spectrum:tailscript',
  version: '0.0.1',
  summary: 'a tiny hack for script tags',
  git: 'https://github.com/acidsound/meteor-tailscript.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('tailscript.js');
});