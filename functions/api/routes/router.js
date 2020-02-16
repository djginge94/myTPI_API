const applianceController = require("../controllers/appliance_controller");

module.exports = app => {
  app.route("/").get((req, res) => {
    res.end();
  });

  app
    .route("/appliance/inspection")
    .get(applianceController.get_all_inspections)
    .post(applianceController.create_inspection);

  app
    .route("/appliance/inspection/:id")
    .get(applianceController.get_inspection)
    // .patch(applianceController.update_inspection)
    .delete(applianceController.delete_inspection);

  app
    .route("/appliance/:applianceId/section/:sectionId/rows")
    .get(applianceController.get_rows)
};
