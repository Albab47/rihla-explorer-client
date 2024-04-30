import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { ImBin } from "react-icons/im";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyListPage = () => {
  const userSpots = useLoaderData([]);
  const navigate = useNavigate();
  console.log(userSpots);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      const res = await fetch(`https://rihla-explorer-server.vercel.app/delete-spot/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });
      const data = await res.json();
      if (data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Spot has been deleted.",
          icon: "success",
        });
        navigate("/tourist-spots");
      }
    }
  };

  if (userSpots == []) {
    return <h1 className="text-amber-600 text-5xl">No spot found!</h1>;
  }

  return (
    <section className="my-24 px-4">
      <div className="relative max-w-screen-xl mx-auto overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Spot name
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                Avg const
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Table row */}
            {userSpots?.map((spot) => (
              <tr
                key={spot._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {spot.spotName}
                </th>
                <td className="px-6 py-4">{spot.country}</td>
                <td className="px-6 py-4">{spot.avgCost}</td>
                <td className="px-6 py-4 space-x-1">
                  <Link
                    to={`/update-spot/${spot._id}`}
                    className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
                  >
                    <MdEdit className="inline -mt-1" /> UPDATE
                  </Link>
                  <Link
                    onClick={() => handleDelete(spot._id)}
                    className="bg-red-100 text-red-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
                  >
                    <ImBin className="inline -mt-1" /> DELETE
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const myListLoader = async ({ params }) => {
  const res = await fetch(`https://rihla-explorer-server.vercel.app/my-list/${params.email}`);
  const data = await res.json();
  return data;
};

export { MyListPage as default, myListLoader };
