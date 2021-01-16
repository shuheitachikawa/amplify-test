/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRcUserGroupHotel = /* GraphQL */ `
  query GetRcUserGroupHotel($id: ID!) {
    getRcUserGroupHotel(id: $id) {
      id
      hotelMasterId
      name
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const listRcUserGroupHotels = /* GraphQL */ `
  query ListRcUserGroupHotels(
    $filter: ModelRcUserGroupHotelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRcUserGroupHotels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hotelMasterId
        name
        createdAt
        updatedAt
        deletedAt
      }
      nextToken
    }
  }
`;
export const rcUserGroupHotelByHotelMasterId = /* GraphQL */ `
  query RcUserGroupHotelByHotelMasterId(
    $hotelMasterId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRcUserGroupHotelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    RcUserGroupHotelByHotelMasterId(
      hotelMasterId: $hotelMasterId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hotelMasterId
        name
        createdAt
        updatedAt
        deletedAt
      }
      nextToken
    }
  }
`;
