import { DiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: Array<DiaryEntry> = diaryData

export const getEntries = () => diaryData

export const addEntry = () => null