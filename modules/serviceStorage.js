export const getStorage = (key) => {
  const dataStorage = JSON.parse(localStorage.getItem(key)) ?
      JSON.parse(localStorage.getItem(key)) : [];
  return dataStorage;
};

export const setStorage = (key, obj) => {
  console.log('obj: ', obj);
  let storageData = [];
  if (getStorage(key).length !== 0) {
    storageData = [...getStorage(key), obj];
    localStorage.setItem(key, JSON.stringify(storageData));
  } else {
    storageData.push(obj);
    localStorage.setItem(key, JSON.stringify(storageData));
  }
};

export const removeTaskStorage = (key, taskId) => {
  const store = getStorage(key);
  if (store.length !== 0) {
    const newMass = store.filter((item) => item.id !== taskId);
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(newMass));
  }
  return;
};
export const editTaskStorage = (key, taskId) => {
  const store = getStorage(key);
  if (store.length !== 0) {
    const newMass = store.map((item) => {
      console.log('item: ', item.id);
      if (item.id === taskId) {
        item.taskStatus = !item.taskStatus;
      }
      return item;
    });
    console.log('newMass: ', newMass);
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(newMass));
  }
  return;
};
