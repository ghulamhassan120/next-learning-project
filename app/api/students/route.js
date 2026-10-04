import db from '../../config/db'
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM students");

    return Response.json(rows);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}