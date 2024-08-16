import React, { useEffect } from 'react'

export default function EvenNumbers({numbers,setNumbers,output,setOutput}) {

    // fetch("http://20.244.56.144/test/even",{
    //     method:"GET",
    //     headers:{
    //         "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzNzkwOTYzLCJpYXQiOjE3MjM3OTA2NjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImY4YmFlY2RiLTQwNmQtNDE2NC04YWIyLTM5NzcwNGZkODA2MyIsInN1YiI6IjIxYnRyY3MwMTlAamFpbnVuaXZlcnNpdHkuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJPcmlnaW5tYXJ0IiwiY2xpZW50SUQiOiJmOGJhZWNkYi00MDZkLTQxNjQtOGFiMi0zOTc3MDRmZDgwNjMiLCJjbGllbnRTZWNyZXQiOiJlam9vTGVEcGhBY2Z4cUlLIiwib3duZXJOYW1lIjoiVGhpcnNhbnRoIiwib3duZXJFbWFpbCI6IjIxYnRyY3MwMTlAamFpbnVuaXZlcnNpdHkuYWMuaW4iLCJyb2xsTm8iOiIyMUJUUkNTMDE5In0.ZMX5fS5nnxS6I5031VBz6PTZsqMhQ20Kp7rGDZKUJLg",
    //         "Content-type":"application/json"
    //     }
    // })
    // .then(async function(d){
    //     const json = await d.json();
    //     setOutput(json.numbers);
    // })

    useEffect(function(){
        setInterval(()=>{
            fetch("http://20.244.56.144/test/even",{
                method:"GET",
                headers:{
                    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzNzkxODU0LCJpYXQiOjE3MjM3OTE1NTQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImY4YmFlY2RiLTQwNmQtNDE2NC04YWIyLTM5NzcwNGZkODA2MyIsInN1YiI6IjIxYnRyY3MwMTlAamFpbnVuaXZlcnNpdHkuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJPcmlnaW5tYXJ0IiwiY2xpZW50SUQiOiJmOGJhZWNkYi00MDZkLTQxNjQtOGFiMi0zOTc3MDRmZDgwNjMiLCJjbGllbnRTZWNyZXQiOiJlam9vTGVEcGhBY2Z4cUlLIiwib3duZXJOYW1lIjoiVGhpcnNhbnRoIiwib3duZXJFbWFpbCI6IjIxYnRyY3MwMTlAamFpbnVuaXZlcnNpdHkuYWMuaW4iLCJyb2xsTm8iOiIyMUJUUkNTMDE5In0.cCYdovZ-WyOhnLwsOdmpvGRtyTj_J9RxB9gEn2yLaAI",
                    "Content-type":"application/json"
                }
            })
            .then(async function(d){
                const json = await d.json();
                setOutput(json.numbers);
            })
        },3000)
    },[output])
  return (
    <div> <h2>WindowPrevState:[{output}]</h2>
    <h2>WindowCurrState:[{output}]</h2>
    <h2>Numbers:[{output}]</h2>
    </div>
   
  )
}
