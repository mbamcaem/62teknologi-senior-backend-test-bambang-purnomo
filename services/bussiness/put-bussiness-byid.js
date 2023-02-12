const pool = require('../../utils/db-pool')

module.exports = (httpRequest, httpResponse) => {

  pool.query(
    `
      UPDATE business
      SET 
        name_business = $1,
        address = $2,
        city = $3,
        state = $4,
        postal_code = $5,
        latitude = $6,
        longitude = $7,
        stars = $8,
        review_count = $9,
        is_open = $10,
        categories = $11  
      WHERE business_id = $12
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
      httpRequest.body.categories,
      httpRequest.params.id,
    ],
    (dbError, dbResponse) => {
      if (dbError) {
        httpResponse.json({
          status: false,
          data: `Data gagal di update, ${dbError}`,
        });
      } else {
        if (dbResponse.rowCount == 1) {
          httpResponse.json({
            status: true,
            data: `${dbResponse.rowCount} data berhasil di update, id : ${httpRequest.params.id} `,
          });
        } else {
          httpResponse.json({
            status: true,
            data: `Data id : ${httpRequest.params.id} tidak ada di database`,
          });
        }
      }
      
    }
  )
}
