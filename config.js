/*config.js*/

/* Arquivo de Configuração */
exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	
	specs: ['spec/*.js'],
	
	/* Iniciando o site desejado */
	baseUrl: 'http://localhost:8080',
	
	capabilities: {
		
		browserName: 'chrome',
		chromeOptions: {
			args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
		}
	},	
};
