const pool = require('../../utils/db-pool')

module.exports = (httpRequest, httpResponse) => {
 
  pool.query(
    `
      INSERT INTO business(
        name_business,
        address,
        city,
        state,
        postal_code,
        latitude,
        longitude,
        stars,
        review_count,
        is_open,
        categories
      )
      VALUES(
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10,
        $11
      )
    `,
    [      
      httpRequest.body.name_business,
      httpRequest.body.address,
      httpRequest.body.city,
      httpRequest.body.state,
      httpRequest.body.postal_code,
      httpRequest.body.latitude,
      httpRequest.body.longitude,
      httpRequest.body.stars,
      httpRequest.body.review_count,
      httpRequest.body.is_open,
      httpRequest.body.categories
    ],
    (dbError, dbResponse) => {
      if(dbError) {
        httpResponse.json({status : false, data : `Data gagal di simpan, ${dbError}` })
      }else{
        httpResponse.json({status : true, data : `${dbResponse.rowCount} data berhasil di simpan ` })        
      }
    }
  )
}
