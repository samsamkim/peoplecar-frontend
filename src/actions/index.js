import persons from '../apis/persons';
import cars from '../apis/persons';

import { CREATE_PERSON, FETCH_PERSONS,
  FETCH_PERSON,
  DELETE_PERSON,
  EDIT_PERSON,
  CREATE_CAR,
  FETCH_CARS,
  FETCH_CAR,
  DELETE_CAR,
  EDIT_CAR } from './types';


export const createPerson = (formValues) => async dispatch => {
  const response = await persons.post('/persons', formValues);
  dispatch({ type: CREATE_PERSON, payload: response.data });
  window.location.reload(false);
}

export const fetchPersons = () => async dispatch => {
  const response = await persons.get('/persons');
  dispatch({ type: FETCH_PERSONS, payload: response.data });
}

export const fetchPerson = (id) => async dispatch => {
  const response = await persons.get(`/persons/${id}`);
  dispatch({ type: FETCH_PERSON, payload: response.data });
}

export const editPerson = (id, formValues) => async dispatch => {
  const response = await persons.put(`/persons/${id}`, formValues);
  dispatch({ type: EDIT_PERSON, payload: response.data });
  window.location.reload(false);
}

export const deletePerson = (id) => async dispatch => {
  await persons.delete(`/persons/${id}`);
  dispatch({ type: DELETE_PERSON, payload: id });
  window.location.reload(false);
}

export const createCar = (formValues) => async dispatch => {
  const response = await cars.post('/cars', formValues);
  dispatch({ type: CREATE_CAR, payload: response.data });
  window.location.reload(false);
}

export const fetchCars = () => async dispatch => {
  const response = await cars.get('/cars');
  dispatch({ type: FETCH_CARS, payload: response.data });
}

export const fetchCar = (id) => async dispatch => {
  const response = await cars.get(`/cars/${id}`);
  dispatch({ type: FETCH_CAR, payload: response.data });
}

export const editCar = (id, formValues) => async dispatch => {
  const response = await cars.put(`/cars/${id}`, formValues);
  dispatch({ type: EDIT_CAR, payload: response.data });
  window.location.reload(false);
}

export const deleteCar = (id) => async dispatch => {
  await cars.delete(`/cars/${id}`);
  dispatch({ type: DELETE_CAR, payload: id });
  window.location.reload(false);
}