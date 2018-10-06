
package com.task.rest.api.security;

import java.io.IOException;
import java.lang.reflect.Method;
import javax.inject.Inject;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;
import org.jboss.resteasy.core.ResourceMethodInvoker;

/**
 *
 * @author Daily Miranda
 */
@Provider
@PreMatching
public class ResponseInterceptor implements ContainerResponseFilter {
    
    private static final String ACCESS_CONTROL_REQUEST_HEADERS = "Access-Control-Request-Headers";
    private static final String ACCESS_CONTROL_REQUEST_METHOD = "Access-Control-Request-Method";
    private static final String ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers";
    private static final String ACCESS_CONTROL_ALLOW_METHODS = "Access-Control-Allow-Methods";
    private static final String ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";
    private static final String ACCESS_CONTROL_ALLOW_ORIGIN_ANYONE = "*";
    
    @Override
    public void filter(ContainerRequestContext containerRequestContext, 
                       ContainerResponseContext containerResponseContext) throws IOException {

        String requestHeaders = containerRequestContext.getHeaderString(ACCESS_CONTROL_REQUEST_HEADERS);
        String requestMethods = containerRequestContext.getHeaderString(ACCESS_CONTROL_REQUEST_METHOD);

        
        //if (requestHeaders != null) {
            containerResponseContext.getHeaders().add(ACCESS_CONTROL_ALLOW_HEADERS, "Content-Type, text/html");
        //}
        //if (requestMethods != null) {
            containerResponseContext.getHeaders().add(ACCESS_CONTROL_ALLOW_METHODS, "GET, POST, PUT, DELETE");
        //}
        
        containerResponseContext.getHeaders().add(ACCESS_CONTROL_ALLOW_ORIGIN, ACCESS_CONTROL_ALLOW_ORIGIN_ANYONE);        
    }
}
