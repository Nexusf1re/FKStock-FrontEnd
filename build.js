const electronWinstaller = require('electron-winstaller');

async function buildInstaller() {
  try {
    await electronWinstaller.createWindowsInstaller({
      appDirectory: './Release/minha-aplicacao-win32-x64', // Caminho da pasta empacotada
      outputDirectory: './Release/installer',               // Onde o instalador será gerado
      authors: 'Matteus Abreu CQL',                       // Nome do autor
      exe: 'Fk-Stock.exe',                           // Nome do executável gerado
      setupExe: 'Fk-Stock.exe',                  // Nome do instalador
      description: 'Descrição da sua aplicação',            // Descrição
      version: '1.0.0',                                     // Versão da app
      iconUrl: 'https://freseniuskabi-stock.vercel.app/favicon.png'               // URL de um ícone .ico (opcional)
    });
    console.log('Instalador criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar instalador:', error);
  }
}

buildInstaller();