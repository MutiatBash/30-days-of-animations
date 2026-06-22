import "./HourglassLoader.css";

const HourglassLoader = () => {
  return (
      <div className="flex h-screen w-full items-center justify-center b bg-[#FFB6C9]">
          {/* Hourglass Container */}
          <div className="hourglass relative w-28 h-44">

              {/* Top Wood/Metal Cap */}
              <div className="absolute top-0 left-[-11px] w-[135px] h-2.5 bg-[#44403C] rounded-sm border-b-2 z-30" />
              <div className="absolute top-1 left-[-4px] w-[120px] h-3 bg-[#44403C] rounded-sm z-20" />

              {/* Bottom Wood/Metal Cap */}
              <div className="absolute bottom-1 left-[-4px] w-[120px] h-3 bg-[#44403C] rounded-sm z-20" />
              <div className="absolute bottom-0 left-[-11px] w-[135px] h-2.5 bg-[#44403C] rounded-sm border-t-2 z-30" />

              {/* Outer Glass Body (Cut into an X-shape) */}
              <div
                  className="absolute top-3 left-0 w-28 h-[154px]  bg-white/35 backdrop-blur-[1px] border border-white/20 z-10"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 52% 50%, 100% 100%, 0% 100%, 49% 50%)' }}
              >
                  {/* left highlight — bright streak on left edge */}
                  <div
                      className="absolute top-0 left-0 w-[75px] h-full opacity-20"
                      style={{
                          background: 'linear-gradient(180deg, white, transparent 45%, transparent 55%, white)',
                          clipPath: 'polygon(0% 0%, 100% 0%, 53% 50%, 100% 100%, 0% 100%, 47% 50%)'
                      }}
                  />
                  {/* Top Sand (Half Full) */}
                  <div
                      className="top-sand absolute top-0 left-0 w-full h-[77px] bg-[#FFEFDE]"
                      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 55% 100%, 45% 100%)' }}
                  />
                  {/* Static Sand Stream (Connecting top and bottom) */}
                  <div className="stream absolute top-1/2 left-[calc(50%-0.95px)] w-[3px] h-[0px] bg-[#FFEFDE] -z-10" />

                  {/* Bottom Sand (Half Full Pile) */}
                  <div
                      className="bottom-sand absolute bottom-0 left-0 w-full h-[0px] bg-[#FFEFDE]"
                      style={{ clipPath: 'polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)' }}
                  />
              </div>
          </div>
      </div>
  )
}

export default HourglassLoader
