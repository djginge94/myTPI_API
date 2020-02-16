exports.create_inspection = (req, res) => {
  const useCase = require("../use_cases/appliances/create_appliance_inspection");

  useCase(req.body)
    .then($0 => res.status(201).send($0))
    .catch($0 => res.status(500).send($0))
    .finally(() => res.end());
};

exports.get_all_inspections = (req, res) => {
  const useCase = require("../use_cases/appliances/get_all_appliance_inspections");

  useCase()
    .then($0 => res.status(200).send($0))
    .catch($0 => res.status(500).send($0))
    .finally(() => res.end());
};

exports.get_inspection = (req, res) => {
  const useCase = require("../use_cases/appliances/get_appliance_inspection");

  useCase(req.params.id)
    .then($0 => res.status(200).send($0))
    .catch($0 => res.status(500).send($0))
    .finally(() => res.end());
};

exports.update_inspection = (req, res) => {
  const useCase = require("../use_cases/appliances/update_appliance_inspection");

  useCase(req.params.id, req.body)
    .then($0 => res.status(200).send($0))
    .catch($0 => res.status(500).send($0))
    .finally(() => res.end());
};

exports.delete_inspection = (req, res) => {
  const useCase = require("../use_cases/appliances/delete_application_inspection");

  useCase(req.params.id)
    .then(res.status(200).send())
    .catch($0 => res.status(500).send($0))
    .finally(() => res.end());
};

exports.get_rows = (req, res) => {
  const useCase = require("../use_cases/appliances/get_appliance_rows");
  useCase(req.params.applianceId, req.params.sectionId)
    .then($0 => res.status(200).send($0))
    .catch($0 => res.status(500).send($0))
    .finally(() => res.end())
}