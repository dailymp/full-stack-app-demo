
package com.task.api;

import org.mongodb.morphia.Datastore;


public interface IConnectionDbBS {
    Datastore getConnectionDb() throws Exception;
}
