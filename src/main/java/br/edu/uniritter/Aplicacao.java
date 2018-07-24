package br.edu.uniritter;

import br.edu.uniritter.property.ArquivoProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
		ArquivoProperties.class
})
public class Aplicacao {

	public static void main(String[] args) {
		SpringApplication.run(Aplicacao.class, args);
	}
}
