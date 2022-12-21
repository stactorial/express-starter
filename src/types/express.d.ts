export interface TypedRequest<body = any, query = any, params = any>
  extends Express.Request {
  body: body;
  query: query;
  params: params;
}
