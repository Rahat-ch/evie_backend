import app from './app';
import { PORT } from './constants/evieApi.constants'

app.listen(PORT, () => console.log(`We're blasting off to http://localhost:${PORT}`))