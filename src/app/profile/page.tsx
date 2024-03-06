import { FetchProfileData } from '../lib/instance'

export default async function Profile () {
  return (
      <div className="w-1/2">
        <section className="max-w-[600px] mx-auto border-l border-r border-white/20 p-4 min-h-screen overflow-y-auto">
            <FetchProfileData/>
        </section>
      </div>
  )
}
