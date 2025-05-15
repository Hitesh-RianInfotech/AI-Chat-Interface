import { v4 as uuidv4 } from 'uuid';

export function createMessage({ sender, content, type = 'text', pluginName, pluginData }) {
  return {
    id: uuidv4(),
    sender,
    content,
    type,
    pluginName,
    pluginData,
    timestamp: new Date().toISOString()
  };
}
