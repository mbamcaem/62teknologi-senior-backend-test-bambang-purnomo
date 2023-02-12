const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
 
  pool.query(
    `
    SELECT * FROM business
    WHERE latitude = $1 and longitude = $2 and is_open = $3 
    ORDER BY name_business desc limit $4 offset $5
      `,    
    [
      httpRequest.query.latitude,
      httpRequest.query.longitude,
      httpRequest.query.open_now,
      httpRequest.query.limit,
      httpRequest.query.offset,
    ],
    (dbError, dbResponse) => {
      if(dbError) {
        httpResponse.json({status : false, data : `${dbError}` })
      }else{
        httpResponse.json({status: true, data: dbResponse.rows });
      }

    }
  );
  
};
