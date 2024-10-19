import { Title } from "@/components/typography/Title"
import banner from "../assets/sections/interviews.avif";
import EssayPreview from "@/components/EssayPreview";
import { interviews } from "@/lib/interviews";

function Interviews() {
  return (
    <div>
      <Title title="Interviews" description="Explore my collection of insightful interviews, delving into diverse topics with thoughtful conversations and unique perspectives." background={banner} />
      <div className="max-w-6xl mx-auto py-6 px-6 lg:px-0">
        {
          interviews.map((interview,index)=> (
            <div className="mb-4">
              <EssayPreview interview={interview} key={index}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Interviews