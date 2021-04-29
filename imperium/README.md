# THE HITCHIKER'S GUIDE TO THE IMPERIUM

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

THE TRAVELLER MAP

https://travellermap.com/

Traveller Map APIs

Coordinates – sector lookup and coordinate conversion
API URLs:

https://travellermap.com/api/coordinates?sector=sector

https://travellermap.com/api/coordinates?sector=sector&hex=hex

https://travellermap.com/api/coordinates?sector=sector&subsector=subsector

https://travellermap.com/api/coordinates?sx=sx&sy=sy

https://travellermap.com/api/coordinates?sx=sx&sy=sy&hx=hx&hy=hy

Parameters:
sector
specify the sector location by name, e.g. "Spinward%20Marches"
hex
specify hex location; optional
subsector
specify subsector (A – P or name); optional
sx
sy
sector in sector/hex coordinates
hx
hy
hex in sector/hex coordinates
x
y
location in world-space coordinates
milieu
data milieu (e.g. M1900); optional



Credits – get world data for a given location
API URLs:
https://travellermap.com/api/credits?sector=sector

https://travellermap.com/api/credits?sector=sector&hex=hex

https://travellermap.com/api/credits?sx=sx&sy=sy

https://travellermap.com/api/credits?sx=sx&sy=sy&hx=hx&hy=hy

https://travellermap.com/api/credits?x=x&y=y


Parameters:
sector
specify the sector location by name, e.g. "Spinward%20Marches"
hex
specify hex location within the named sector (defaults to 1620 if unspecified)
sx
sy
sector in sector/hex coordinates
hx
hy
hex in sector/hex coordinates
x
y
location in world-space coordinates
milieu
data milieu (e.g. M1900); optional


SEC – retrieve UWP data for a sector

API URLs:
https://travellermap.com/api/sec?sector=sector

https://travellermap.com/api/sec?sector=sector&hex=hex

https://travellermap.com/api/sec?sector=sector&subsector=subsector

https://travellermap.com/api/sec?sector=sector&quadrant=quadrant

https://travellermap.com/api/sec?sx=sx&sy=sy


Parameters:
sector
sector name or T5SS abbreviation
subsector
A – P or name; optional – if specified, only UWPs for that subsector will be included
quadrant
one of Alpha, Beta, Gamma or Delta
sx
sy
sector in sector/hex coordinates
milieu
data milieu (e.g. M1900); optional


Options:
type=SecondSurvey
Data Format Definition The Traveller5 Second Survey format in human readable form: Hex, Name, UWP, Trade Classifications and Remarks, Extensions (Ix, Ex, Cx), Nobility (N), Bases (B), Travel Zone (Z), PBG, Worlds (W), Allegiance and Stellar. Note that fields may be blank if no official T5 data exists.
Second Survey is the default for /data/ URLs.

type=TabDelimited
Data Format Definition Full Traveller5 Second Survey data, in a more easily parsed format.
type=Legacy
Data Format Definition Legacy sector format: Name, Hex, UWP, Bases, Trade Classifications and Remarks, Travel Zone, PBG, Allegiance and Stellar.
Legacy format is the default for /api/ URLs

metadata=0
Don't include sector metadata as comments in the file
header=0
Don't include field definitions in the file
sscoords=1
Use subsector style (0101-0810) numbering instead of sector style (0101-3240)


Metadata – retrieve metadata for a sector

API URLs:
https://travellermap.com/api/metadata?sector=sector

https://travellermap.com/api/metadata?sx=sx&sy=sy


