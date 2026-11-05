// Publica o pacote no npm apenas se a versão atual ainda não existir no registry.
//
// Torna o release idempotente: o workflow roda a cada push no master e, sem
// changeset pendente, chama este script. Sem a checagem, um push comum (docs,
// fix de CI...) tentaria republicar uma versão já publicada, e o npm rejeita
// com "You cannot publish over the previously published versions".
//
// Uso: node scripts/release.mjs [--dry-run]
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const { name, version } = JSON.parse(readFileSync('package.json', 'utf8'));
const spec = `${name}@${version}`;
const dryRun = process.argv.includes('--dry-run');

// Sem shell no CI (Linux). No Windows, npm e pnpm são arquivos .cmd e só rodam via shell.
const run = (command, args, options = {}) =>
  execFileSync(command, args, { shell: process.platform === 'win32', ...options });

function isPublished() {
  try {
    run('npm', ['view', spec, 'version'], { stdio: 'pipe' });
    return true;
  } catch (error) {
    const output = `${error.stdout ?? ''}${error.stderr ?? ''}`;
    // E404 = a versão não existe. Qualquer outro erro (rede, auth) não pode ser
    // tratado como "não publicado", então é repassado e o job falha.
    if (output.includes('E404')) return false;
    throw error;
  }
}

if (isPublished()) {
  console.log(`${spec} já está publicado no npm. Nada a publicar.`);
  process.exit(0);
}

console.log(`Publicando ${spec}${dryRun ? ' (dry-run)' : ''}...`);
run('pnpm', ['build'], { stdio: 'inherit' });
run('npm', ['publish', '--access', 'public', ...(dryRun ? ['--dry-run'] : [])], { stdio: 'inherit' });
