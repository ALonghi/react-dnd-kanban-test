import Task from "../components/Task"

export async function getServerSideProps() {
  try {
    const boards = await fetch("http://localhost:8080/api/boards")
      .then((res) => res.json())
      .then(res => res.data)
    return {
      props: {
        boards
      }
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}

const IndexPage = ({ boards }) => (
  <>
    <div className="w-[100vw] min-h-[100vh] h-full">
      <p>Found {boards?.length} boards</p>
      <Task />
    </div>
  </>
)

export default IndexPage
