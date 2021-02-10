export const hello = async (_event, _content) => {
    console.log('Hello!')
    return {
        statusCode: 200,
        body: JSON.stringify({ status: 'ok' }),
    }
}
