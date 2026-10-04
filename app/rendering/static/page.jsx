import React from 'react'
import db from '../../config/db.js'

export const revalidate = 30;
const StaticPage =async () => {
    const [students]=await db.execute("SELECT * FROM students")
    
  return (
   <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {students.map((student) => (
    <div
      key={student.id}
      className="rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
        {student.name.charAt(0)}
      </div>

      <h2 className="mb-2 text-xl font-bold text-gray-800">
        {student.name}
      </h2>

      <p className="mb-1 text-sm text-gray-600">
        📧 {student.email}
      </p>

      <p className="mb-1 text-sm text-gray-600">
        🎂 Age: {student.age}
      </p>

      <p className="text-sm text-gray-600">
        📍 {student.city}
      </p>
    </div>
  ))}
</div>
  )
}

export default StaticPage