import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
      <Link to='/product'>Go to prodcuts</Link>
    </div>
  )
}
