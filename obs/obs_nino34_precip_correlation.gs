* This script calculates the one-point correlation between nino34 and precip
* globally from the ersstv4 and CPC_UNI data sets for NDJFM means

'reinit'
rc = gsfallow("on")
rc = rbpalette()
'sdfopen /project/clihealth/in_progress/cali_drought/1979-2014.ersstv4.ndjfm.series.nc'
'sdfopen /project/clihealth/in_progress/cali_drought/1979-2014.CPC_UNI.ndjfm.series.nc'
y1 = 1982
y2 = 2009
* Define NINO34 index
'set dfile 1'
'set time nov'y1' nov'y2
'set x 1'
'set y 1'
'define nino34 = aave(ndjfm,lon=190,lon=240,lat=-5,lat=5)'
'set dfile 2'
'set t 1'
'set lat 25 55'
'set lon 230 300'
*'set lat -40 0'
*'set lon 0 60'
'define cmap = tcorr(nino34,ndjfm.2,time=nov'y1',time=nov'y2')'
'set gxout shaded'
'set clevs -.6 -.5 -.4 -.3 -.2 -.1 .1 .2 .3 .4 .5 .6'
'set ccols 23 25 27 29 30 31 0 42 44 46 48 50 52'
'set mpdset hires'
'set grads off'
'd cmap'
'set line 6'
'drawbox 237 246 32 38'
'drawbox 235 240 42 50'
'cbarn'
*'ljtitle 1980-2010 NDJFM ERSSTV4 NINO34 - CPC_UNI Precip correlation'
'gxprint 'y1'-'y2'.ersstv4_nino34_CPC_UNI.ndjfm.conus.png white x2200 y1700'
