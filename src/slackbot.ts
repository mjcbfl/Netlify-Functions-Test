// Import statements
import * as dotenv from 'dotenv'
dotenv.config();

import { APIGatewayEvent, Context } from 'aws-lambda'

export async function handler (event: APIGatewayEvent, context: Context) {
  return {
    statusCode: 200,
    body: "Hello, World"
  };
}