# OPENVOLT CHALLENGE


### Running the application**
> [!NOTE]  
> the application requires a .env file with the following entry
> OPENVAULT_API_KEY

to run the application, do the following

```sh
$ npm start
```

### Sample requests

```
| Request      | Sample | Response |
| ----------- | ----------- | ----------- |
| localhost:5500/carbon/{meter_id}      | localhost:5500/carbon/6514167223e3d1424bf82742 | value       |
| localhost:5500/energy/{meter_id}/{granularity}   |  localhost:5500/energy/6514167223e3d1424bf82742/month | value        |
```

