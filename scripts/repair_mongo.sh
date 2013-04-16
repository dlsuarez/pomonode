sudo rm /var/lib/mongodb/mongod.lock
sudo chown -R mongodb:mongodb /var/lib/mongodb/
sudo -u mongodb mongod -f /etc/mongodb.conf --repair
sudo service mongodb start
