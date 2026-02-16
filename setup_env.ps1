
$nodePath = "C:\Program Files\nodejs"
$userNpmPath = "$env:APPDATA\npm"

Write-Host "Configuring developer environment..."

# Add Node.js to PATH if it exists
if (Test-Path $nodePath) {
    $env:Path = "$nodePath;$env:Path"
    Write-Host "  Added $nodePath to PATH"
}
else {
    Write-Host "  WARNING: Node.js path not found at $nodePath"
}

# Add User NPM modules to PATH (for global packages)
if (Test-Path $userNpmPath) {
    $env:Path = "$userNpmPath;$env:Path"
    Write-Host "  Added $userNpmPath to PATH"
}

# Verify
Write-Host "Verifying configuration:"
try {
    $nodeVer = node -v
    $npmVer = npm -v
    Write-Host "  Node Version: $nodeVer"
    Write-Host "  NPM Version:  $npmVer"
    Write-Host "Environment configured successfully."
}
catch {
    Write-Host "  ERROR: node or npm still not recognized."
}
