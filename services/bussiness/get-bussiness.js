const pool = require('../../utils/db-pool')

module.exports = (httpRequest, httpResponse) => {
  // httpResponse.json({oke : "sukses", data : httpRequest.query.name_business})
  if(httpRequest.query.name_business) {

    pool.query(
      `
        SELECT * FROM business
        WHERE name_business = $1
        ORDER BY name_business
      `,
      [
        httpRequest.query.name_business
      ],
      (dbError, dbResponse) => {
        if(dbError) throw dbError

        httpResponse.json({status : true, data : dbResponse.rows})
      }
    )

  } else {

    pool.query(
      `
        SELECT * FROM business
        ORDER BY name_business
      `,
      [],
      (dbError, dbResponse) => {
        if(dbError) throw dbError

        httpResponse.json({status : true, data : dbResponse.rows})      
      }
    )

  }

}
