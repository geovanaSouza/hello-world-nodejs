#!/bin/sh

oc create configmap config --from-literal=message='Hello world! DevopsDay Floripa!!!' --from-literal=color=blue --from-literal=environment=development -n geovana
oc create -f deploymentconfig.json -n geovana
oc create -f buildconfig.json -n geovana
