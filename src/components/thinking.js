//es wird ein Timer vonnöten sein, der jede Generation neu berechnet (setInterval)
//also auch useEffect()
//state ist vonnöten! wird dann in Verbindung mit className gesetzt (switch von "dead" zu "alive" und v.v.)
//vielleicht kann ich "changeAmbivalence" im Timer verwenden

//start button ===>const interval = setInterval(() => {})
//stop button ===> clearInterval(interval)

//const start = () => {} in onClick={} und changeAmbivalence() in start()

//Brechnung der Zellen:
//die Koordinaten müssen NICHT!!! geordnet werden, da jede Zelle an sich auf die Konditionen/Abhängigkeiten geprüft wird


//ein Input für Anzahl der Reihen und Spalten:
//die Zellenbreite bemisst sich an der Anzahl der Zellen PRO Reihe oder Spalte JE 900 oder 500px
// jetzt 90 Spalten und 50 Reihen

//vielleicht braucht man gar keinen state und aknn alles über className "dead"/"alive" machen?