import Link from 'next/link'

export default function success() {
  return (
    <>
      {" "}
    
     
        <div id="cover">
  
          <div className="center">
            <div id="succ">Success!</div>
            <div id="home">
              <Link href="/">
                <a id="home2">RETURN HOME</a>
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          #cover {
            position: relative;
            padding-bottom: 100px;
            min-height: 100vh;
          
          }
          #succ {
            font-size: 30px;
          }
          #home {
            font-size: 14px;
          }
          #home2 {
            font-size: 14px;
            color: gray;
          }
          .center {
            position: fixed;
            font-size: 23px;
            text-align: center;
            font-weight: 600;
            color: black;
            top: 50%;
            left: 50%;
            /* bring your own prefixes */
            transform: translate(-50%, -50%);
          }
        `}</style>
  
    </>
  )
}
