/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createRcUserGroupHotel = /* GraphQL */ `
  mutation CreateRcUserGroupHotel(
    $input: CreateRcUserGroupHotelInput!
    $condition: ModelRcUserGroupHotelConditionInput
  ) {
    createRcUserGroupHotel(input: $input, condition: $condition) {
      id
      hotelMasterId
      name
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const updateRcUserGroupHotel = /* GraphQL */ `
  mutation UpdateRcUserGroupHotel(
    $input: UpdateRcUserGroupHotelInput!
    $condition: ModelRcUserGroupHotelConditionInput
  ) {
    updateRcUserGroupHotel(input: $input, condition: $condition) {
      id
      hotelMasterId
      name
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const deleteRcUserGroupHotel = /* GraphQL */ `
  mutation DeleteRcUserGroupHotel(
    $input: DeleteRcUserGroupHotelInput!
    $condition: ModelRcUserGroupHotelConditionInput
  ) {
    deleteRcUserGroupHotel(input: $input, condition: $condition) {
      id
      hotelMasterId
      name
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
