package br.edu.uniritter.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ArquivoNotFoundException extends RuntimeException {
    public ArquivoNotFoundException(String message) {
        super(message);
    }

    public ArquivoNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
