package com.task.interfaces;

import com.task.domain.ConfigurationDTO;
import org.mongodb.morphia.Datastore;

import java.util.List;

public interface IConfigurationDAO {

    List<ConfigurationDTO> getAllConfigurationsList(Datastore datastore) throws Exception;
    void insertConfiguration(ConfigurationDTO configuration, Datastore datastore) throws Exception;
    ConfigurationDTO getConfigurationByConfigId(String configId, Datastore datastore) throws Exception;
    ConfigurationDTO getConfigurationByMongoId(String mongoId, Datastore datastore) throws Exception;
    void deleteConfiguration(ConfigurationDTO configuration, Datastore datastore) throws Exception;
    void updateConfiguration(ConfigurationDTO configuration, Datastore datastore) throws Exception;
}