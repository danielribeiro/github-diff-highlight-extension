#!/usr/bin/env bash
echo Distributing the extension...
mkdir -p pkg/
zip -r pkg/three-hub.zip . -x '.*/*' '.*' '*.sh' 'test/*' 'pkg/*' 'docs/*'
echo Distribution file created at pkg/gh-diff-highlight.zip