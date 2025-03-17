// src/ai/model.ts
import * as tf from '@tensorflow/tfjs';

const loadModel = async (): Promise<tf.LayersModel> => {
  const model = await tf.loadLayersModel('https://your-model-url/model.json');
  return model;
};

const predictPrice = async (model: tf.LayersModel, data: number[][]): Promise<number> => {
  const input = tf.tensor2d(data);
  const prediction = model.predict(input) as tf.Tensor;
  return prediction.dataSync()[0];
};

export { loadModel, predictPrice };