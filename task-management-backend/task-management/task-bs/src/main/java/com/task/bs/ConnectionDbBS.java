
package com.task.bs;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.task.api.IConnectionDbBS;
import com.task.api.IInfraestructureBS;
import com.task.common.Constants;
import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Singleton;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

@Singleton
public class ConnectionDbBS implements IConnectionDbBS {
    private Datastore datastore;    
    
    @Inject
    private IInfraestructureBS infraestructureBS;
    
    @PostConstruct
    private void init() {
        this.buildDatastore();
    }
    
    private void buildDatastore() {
        Datastore newDatastore = null;
        MongoClient  client = null;    
        Morphia morphia = null;    
        String connectionString;
        
        try {
            connectionString = this.getConnectionString();
            
            client = new MongoClient(this.getMongoClientUri(connectionString));
            morphia = new Morphia();
            newDatastore = morphia.createDatastore(client, this.getMongoClientUri(connectionString).getDatabase());
            
            this.datastore = newDatastore;
        } catch(Exception ex) {
            System.out.println(ex);
        }
    }
    
    @Override
    public Datastore getConnectionDb() {        
        return this.datastore;
    }
    
    private String getConnectionString() throws Exception {
        String connectionDbString = null;
        
        connectionDbString = this.infraestructureBS.getStringValueFromEnvironmentVariable(Constants.DB_CONNECTION_STRING_DB);
        
        return connectionDbString;
    }
    
    private MongoClientURI getMongoClientUri(String mongoDbConnectionString) {
        MongoClientURI mongoClientURI = null;
        
        try {
            mongoClientURI = new MongoClientURI(mongoDbConnectionString);
        } catch(Exception ex) {
            mongoClientURI = null;
        }
        
        return mongoClientURI;
    }
}
