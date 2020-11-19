const {
  Client,
  logger,
  Variables,
} = require('camunda-external-task-client-js');

const config = { baseUrl: 'http://localhost:8080/engine-rest', use: logger };

const client = new Client(config);

client.subscribe('ActivateAdvertisement', async function ({
  task,
  taskService,
}) {
  // do some thing is
  var active = Math.random() >= 0.5;
  const processVariable = new Variables();
  processVariable.set('active', active);

  // complete the task
  await taskService.complete(task, processVariables);
});
