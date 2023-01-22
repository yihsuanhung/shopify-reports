import prompts from 'prompts';

const run = async () => {
  const groupBy = await prompts([
    {
      type: 'select',
      name: 'type',
      message: 'Group by options',
      choices: [
        { title: 'None', value: 'none' },
        { title: 'SKU', value: 'sku' },
        { title: 'Product name', value: 'product_name' },
      ],
    },
    {
      type: 'select',
      name: 'time',
      message: 'Time granularity',
      choices: [
        { title: 'Daily', value: 'daily' },
        { title: 'Monthly', value: 'monthly' },
      ],
    },
    {
      type: 'select',
      name: 'metric',
      message: 'Metric type',
      choices: [
        { title: 'Gross sales unit', value: 'unit' },
        { title: 'Gross sales amount in $', value: 'amount' },
      ],
    },
  ]);

  console.log(groupBy);
};

run()
  .then(() => console.log('\n\n==========\nEnd'))
  .catch((e) => console.log('\n\n==========\nFail', e));
