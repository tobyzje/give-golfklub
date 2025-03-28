"use client"

import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiDayHaze, WiNightClear } from 'react-icons/wi'
import { useEffect, useState } from 'react'

interface WeatherData {
  temperature: number;
  skyText: string;
  location: string;
}

interface WeatherResponse {
  LocationName: string;
  CurrentData: {
    temperature: number;
    skyText: string;
    windText: string;
  }
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 0,
    skyText: '',
    location: 'Give'
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setError(null)
        const response = await fetch('/api/weather')
        if (!response.ok) {
          throw new Error('Kunne ikke hente vejrdata')
        }
        const data: WeatherResponse = await response.json()
        
        setWeather({
          temperature: Math.round(data.CurrentData.temperature),
          skyText: data.CurrentData.skyText,
          location: data.LocationName
        })
      } catch (error) {
        console.error('Fejl ved hentning af vejrdata:', error)
        setError('Kunne ikke hente vejrdata')
      } finally {
        setIsLoading(false)
      }
    }

    fetchWeather()
    // Opdater vejret hvert 5. minut
    const interval = setInterval(fetchWeather, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  const getWeatherIcon = () => {
    const skyText = weather.skyText.toLowerCase()
    
    if (skyText.includes('klar') && skyText.includes('nat')) {
      return <WiNightClear className="text-2xl" />
    } else if (skyText.includes('klar') || skyText.includes('sol')) {
      return <WiDaySunny className="text-2xl" />
    } else if (skyText.includes('sky') || skyText.includes('over')) {
      return <WiCloudy className="text-2xl" />
    } else if (skyText.includes('regn')) {
      return <WiRain className="text-2xl" />
    } else if (skyText.includes('sne')) {
      return <WiSnow className="text-2xl" />
    } else if (skyText.includes('tåge') || skyText.includes('dis')) {
      return <WiDayHaze className="text-2xl" />
    }
    
    return <WiDaySunny className="text-2xl" />
  }

  if (isLoading) {
    return (
      <div className="flex items-center gap-1 text-sm animate-pulse">
        <span>Henter vejr</span>
        <svg className="ml-1 animate-spin h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center gap-1 text-sm text-red-500">
        <span>{error}</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      <span>{weather.location}</span>
      {getWeatherIcon()}
      <span>{weather.temperature}°C</span>
    </div>
  )
} 