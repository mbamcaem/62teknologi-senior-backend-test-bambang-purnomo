const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
  pool.query(
    `
      DELETE FROM business
      WHERE business_id = $1
    `,
    [httpRequest.params.id],
    (dbError, dbResponse) => {
      if (dbError) {
        httpResponse.json({
          status: false,
          data: `Data gagal di hapus, ${dbError}`,
        });
      } else {
        if (dbResponse.rowCount == 1) {
          httpResponse.json({
            status: true,
            data: `${dbResponse.rowCount} data berhasil di hapus, id : ${httpRequest.params.id} `,
          });
        } else {
          httpResponse.json({
            status: true,
            data: `Data id : ${httpRequest.params.id} tidak ada di database`,
          });
        }
      }
    }
  );
};
