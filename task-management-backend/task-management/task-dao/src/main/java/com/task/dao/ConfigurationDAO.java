package com.task.dao;

import com.task.domain.ConfigurationDTO;
import com.task.interfaces.IConfigurationDAO;
import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.dao.BasicDAO;


import javax.enterprise.inject.Default;
import java.util.List;
import javax.inject.Singleton;

@Singleton
@Default
public class ConfigurationDAO implements IConfigurationDAO {

    @Override
    public List<ConfigurationDTO> getAllConfigurationsList(Datastore datastore) throws Exception {
        BasicDAO<ConfigurationDTO, ObjectId> localBasicDAO;
        
        try {
            localBasicDAO = new BasicDAO(ConfigurationDTO.class, datastore);
            
            return localBasicDAO.find().asList();
        } catch(Exception ex) {
            throw ex;
        }        
    }

    @Override
    public ConfigurationDTO getConfigurationByConfigId(String configId, Datastore datastore) throws Exception {
        BasicDAO<ConfigurationDTO, ObjectId> localBasicDAO;

        try {
            localBasicDAO = new BasicDAO(ConfigurationDTO.class, datastore);

            return localBasicDAO.findOne("configId", configId);
        } catch(Exception ex) {
            throw ex;
        }
    }

    @Override
    public ConfigurationDTO getConfigurationByMongoId(String mongoId, Datastore datastore) throws Exception {
        BasicDAO<ConfigurationDTO, ObjectId> localBasicDAO;

        try {
            localBasicDAO = new BasicDAO(ConfigurationDTO.class, datastore);

            return localBasicDAO.get(new ObjectId(mongoId));
        } catch(Exception ex) {
            throw ex;
        }
    }

    @Override
    public void insertConfiguration(ConfigurationDTO configuration, Datastore dataStore) throws Exception {
        BasicDAO<ConfigurationDTO, ObjectId> localBasicDAO;
        
        try {
            localBasicDAO = new BasicDAO(ConfigurationDTO.class, dataStore);
            
            localBasicDAO.save(configuration);
        } catch(Exception ex) {
            throw ex;
        }
    }

    @Override
    public void deleteConfiguration(ConfigurationDTO configuration, Datastore datastore) throws Exception {
        BasicDAO<ConfigurationDTO, ObjectId> localBasicDAO;

        try {
            localBasicDAO = new BasicDAO(ConfigurationDTO.class, datastore);

            localBasicDAO.delete(configuration);
        } catch(Exception ex) {
            throw ex;
        }
    }

    @Override
    public void updateConfiguration(ConfigurationDTO configuration, Datastore datastore) throws Exception {
        BasicDAO<ConfigurationDTO, ObjectId> localBasicDAO;

        try {
            localBasicDAO = new BasicDAO(ConfigurationDTO.class, datastore);

            localBasicDAO.getDatastore().merge(configuration);
        } catch(Exception ex) {
            throw ex;
        }
    }
}